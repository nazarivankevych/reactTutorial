function HomeTitle() {
  return (
    <section className='py-4'>
        <div className='container-xl lg:container m-auto'>
            <div className='text-center'>
                <h1 className='text-4xl font-extrabold text-blue-500 sm:text-5xl md:text-5xl'>
                    Workflow Analyzer
                </h1>
                <p className='m-4 text-leftw'>
                This tool allows you to check if your workflow or atomic action conforms to our best practices. Note that this analyzer doesn’t check for EVERY possible best practice, nor does it perform the same validation that SecureX orchestration does when you click the Validate button in the workflow editor. To use this tool, simply export your workflow or atomic action to JSON and copy/paste the JSON below.
                </p>
            </div>
        </div>
    </section>
  )
}

export default HomeTitle