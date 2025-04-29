const NoResultsDiv = () => {
  return (
    <div className="no-results">
      <img src="icons/no-result.svg" alt="No Results Found" className="icon" /><br></br>
      <h3 className="title">Somthing Went Wrong</h3>
      <p className="message">We&apos;re unable to retrive the weather details. Ensure you&apos;ve entered a valid city or try again later.</p>
    </div>
  )
}

export default NoResultsDiv
