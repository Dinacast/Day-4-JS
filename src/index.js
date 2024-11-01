import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const jumlah = 500;

if (jumlah <= 50) {
  console.log("jumlah penduduk tidak padat");
} else if (jumlah <= 250) {
  console.log("jumlah penduduk kurang padat");
} else if (jumlah <= 400) {
  console.log("jumlah penduduk cukup padat");
} else {
  console.log("jumlah penduduk sangat padat");
}
