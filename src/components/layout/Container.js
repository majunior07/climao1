function Container(props){
    return(
        <div>
            <h1>Container</h1>
            <div>{props.children}</div>
        </div>
    );
}

export default Container;