import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        height={460}
        viewBox="0 0 240 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="15" y="10" rx="10" ry="10" width="200" height="50" />
        <rect x="15" y="80" rx="10" ry="10" width="200" height="50" />
        <rect x="15" y="150" rx="10" ry="10" width="200" height="50" />
        <rect x="15" y="220" rx="10" ry="10" width="200" height="50" />
        <rect x="15" y="290" rx="10" ry="10" width="200" height="50" />
        <rect x="15" y="360" rx="10" ry="10" width="200" height="50" />
    </ContentLoader>
)

export default MyLoader