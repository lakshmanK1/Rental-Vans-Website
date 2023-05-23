import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {error:null};
    }

    componentDidCatch(error){
        this.setState({error:error});
    }

    render(){
        if (this.state.error) {
            return (<center><h1>Opps! something went wrong</h1></center>);
        }

        return (this.props.children);
    }
}

export default ErrorBoundary;