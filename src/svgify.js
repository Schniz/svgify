const SVGO = require("svgo");
const { exec } = require("child_process");
const potrace = require("potrace");
const svgo = new SVGO()

const optimize = svg => new Promise((resolve, reject) => {
  svgo.optimize(svg, ({data}) => {
    return resolve(data)
  })
})

const resize = (fileName, maxSize = 200) =>
  new Promise((resolve, reject) => {
    exec(`convert ${fileName} -resize ${maxSize}x${maxSize} ${fileName}.resized`, (err, stdout, stderr) => {
      if (stderr) return reject(stderr);
      return resolve(`${fileName}.resized`);
    });
  });

const trace = (
  file,
  params = {
    color: "#ccc",
    flat: true,
    turnPolicy: "majority",
    turdSize: 100,
    optTolerance: 0.4
  }
) => {
  return new Promise((resolve, reject) => {
    potrace.trace(file, params, (err, svg) => {
      if (err) return reject(err);
      return resolve(svg);
    });
  }).then(svg => optimize(svg));
};

module.exports = file => resize(file).then(trace);
module.exports.resize = resize;
module.exports.trace = trace;
