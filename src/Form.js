import React, { Component } from "react"

class Container extends Component {
  state = {
    active: 0,
  }

  handleBulletClick = (i, props, modifiers) => {
    
    if (modifiers) {
      const length = this.props.children.length
      const active = this.state.active + modifiers
      if (active == -1 || active == length ) return 
      this.setState(ps => ({
        active 
      }))
      return
    }

    this.setState({
      active: i,
    })
  }

  render() {
    return (
      <div className="form__container">
        <div className="form__header">
          <div className="step__bullet step__bullet--next" onClick={() => this.handleBulletClick(null, null, -1)}>
            back
          </div>

          {React.Children.map(this.props.children, (Step, i) => {
            return (
              <div className="step__bullet" onClick={() => this.handleBulletClick(i, Step.props)}>
                {Step.props.title}
              </div>
            )
          })}
          <div className="step__bullet step__bullet--back" onClick={() => this.handleBulletClick(null, null, 1)}>
            next
          </div>
        </div>
        <div className="form__step">{React.cloneElement(this.props.children[this.state.active])}</div>
      </div>
    )
  }
}

class Step extends Component {
  render() {
    return <div className="step__container">
      {React.Children.map(this.props.children, (Cmp) => {
        return React.cloneElement(Cmp)
      })}
    </div>
  }
}

class Form extends Component {
  static Step = Step
  static Container = Container
  render() {
    return <div>use children Container|Step</div>
  }
}

export default Form
