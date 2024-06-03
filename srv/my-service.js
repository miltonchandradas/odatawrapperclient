const cds = require("@sap/cds");

module.exports = async (srv) => {
  srv.on("getHello", (req) => {
    let { name } = req.data;
    return `Hello, ${name}`;
  });
};
