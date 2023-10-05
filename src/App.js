import "./App.css";
function App() {
	return (
		<div className="App">
      <h1>Welcome to Calibit Systems Private Limited</h1>
	  <h1>Login page </h1>
			<fieldset>
				<form action="#" method="get">
					<label for="firstname">First Name*</label>
					<input
						type="text"
						name="firstname"
						id="firstname"
						placeholder="Enter First Name"
						required
					/>
					<br /><br />
					<label for="lastname">Last Name*</label>
					<input
						type="text"
						name="lastname"
						id="lastname"
						placeholder="Enter Last Name"
						required
					/>
					<br /><br />
					<label for="email">Enter Email* </label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter email"
						required
					/>
					<br /><br />
					<label for="tel">Contact*</label>
					<input
						type="tel"
						name="tel"
						id="tel"
						placeholder="Enter Mobile number"
						required
					/>
					<br />
				</form>
				<a href="http://127.0.0.1:5500/src/Welcomeform.html">
        <button>Login</button>
    </a>

			</fieldset>
		</div>
	);
}

export default App;