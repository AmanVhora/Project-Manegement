class Navbar extends React.Component {
  render () {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg bg-body-tertiary mx-5">
          <a class="navbar-brand" href={this.props.home}>Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href={this.props.project}>Projects</a>
            </div>
          </div>
          <div class="d-flex">
            <a class="nav-link" href={this.props.profile}><i class="bi bi-person-circle fs-3 me-4"></i></a>
            <a href={this.props.logout} class="btn btn-danger rounded-1" data-turbo-method="delete">Logout</a>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
