import React, { Fragment } from 'react'

interface PageProps {
    suggestions:any
}

interface PageState {}

export default class Page extends React.Component <PageProps, PageState>{
    render(){
        return <Fragment>
            Results
        </Fragment>
    }
}