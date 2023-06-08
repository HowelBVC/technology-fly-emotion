const React = require("react")
const Layout = require("./src/components/wrappers/PageWrapper.component").default

exports.wrapPageElement = ({ element, props }) => {
   return <Layout {...props}>{element}</Layout>
}