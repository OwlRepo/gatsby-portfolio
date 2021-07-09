import React from 'react';
import Layout from './src/global/components/Layout'
export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{ element }</Layout>
}

export function wrapRootElement({ element }) {
    return <>{ element }</>
}