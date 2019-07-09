module.exports = {
  chainWebpack: config => {
    config.output.filename('vendors/js/SalesConsultant.js').end();
  },
  publicPath: ''
}