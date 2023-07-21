import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import Beat from "../models/beat.js";
import Distribution from "../models/distribution.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJOyIjNT5fkkJS6Up2DFZTHwEp8rMkfnM",
  authDomain: "nbzz-91837.firebaseapp.com",
  projectId: "nbzz-91837",
  storageBucket: "nbzz-91837.appspot.com",
  messagingSenderId: "942271522151",
  appId: "1:942271522151:web:0e122e3a2af5a43dce3bc2",
  measurementId: "G-SWBL8PCYGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage()


export const generateUrl = async (docRef) => {
  const sampleRef = ref(storage, docRef)
  return getDownloadURL(sampleRef).then(url => url)
}

export const firebaseUpload = async (files, beatName, beatId) => {
  const mp3 = files['mp3'][0]
  const wav = files['wav'][0]
  // const stem = files['stem'][0]
  const sample = files['sample'][0]
  const mp3Ref = ref(storage, `BEATS/${beatName.trim()}/${mp3.fieldname}/`)
  const wavRef = ref(storage, `BEATS/${beatName.trim()}/${wav.fieldname}/`)
  // const stemRef = ref(storage, `BEATS/${beatName.trim()}/${stem.fieldname}/`)
  const sampleRef = ref(storage, `BEATS/${beatName.trim()}/${sample.fieldname}/`)
  // , uploadBytes(stemRef, stem.buffer, { contentType: 'application/zip' })
  Promise.all([uploadBytes(mp3Ref, mp3.buffer, { contentType: mp3.mimetype }), uploadBytes(wavRef, wav.buffer, { contentType: wav.mimetype }), uploadBytes(sampleRef, sample.buffer, { contentType: sample.mimetype })])
    .then(snapshots => {
      const uploadRefs = snapshots.map(({ ref }) => getDownloadURL(ref))
      Promise.all(uploadRefs)
        .then(async (downloadLinks) => {
          const beat = await Beat.findById(beatId)
          await Distribution.create({
            mp3: downloadLinks[0],
            wav: downloadLinks[1],
            // stem: downloadLinks[2],
            sample: downloadLinks[2],
            beat: beat
          })
          beat.sample = downloadLinks[2]
          await beat.save()
        })
    })
    .catch(err => {
      console.log(err.message)
    })
}