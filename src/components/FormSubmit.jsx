export default function FormSubmit() {
    const handleForm = (e) => {
        e.preventDefault() // stops the form from refreshing the page
        const make = e.target.make.value
        const model = e.target.model.value
        const year = e.target.year.value
        if(!year || !make || !model) return
        alert(`You submitted a ${year} ${make} ${model}.`)
        // clear the form after submit
        e.target.make.value = ""
        e.target.model.value = ""
        e.target.year.value = ""
    }
   return(
    <>
    <h2>Get Values</h2>
    <p>Most of the time, we only need the form Values once the form is submitted.</p>
    <form onSubmit={handleForm}
    style={{
    border: 0,
    borderWidth: 2,
    borderStyle: "solid",
    padding: "1em" }}>
 <label htmlFor="make">Make:
<input type="text" name="make" />
 </label> <br />
 <label htmlFor="model">Model:
 <input type="text" name="model" />
 </label> <br />
 <label htmlFor="year">Year:
 <input type="text" name="year" />
 </label> <br />
 <input type="submit" value="Save Vehicle" />
    </form>
    </>
   ) 
}