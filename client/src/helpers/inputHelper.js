

export function inputChangeHandler(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
}

export function submitHandler(event) {
    this.props.onSubmit(this.state);
    event.preventDefault();
}