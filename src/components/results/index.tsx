import React from 'react'
import { connect } from 'react-redux'
import Page from './page'

interface ResultsProps {suggestions:any}
interface ResultsState {}

class Results extends React.Component <ResultsProps, ResultsState>{
    render(){
        const { suggestions } = this.props
        console.log(this.props);
        return <Page suggestions={suggestions}/>
    }
}

const mapStateToProps = (state:any) => {
    return {
        suggestions: state.suggestions,
        f: 987
    }
}

export default connect(mapStateToProps)(Results)