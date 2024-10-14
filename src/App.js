import { useState } from "react";
import './App.css';

function App() {
	const [formData, setFormData] = useState({
		index: "",
		author: "",
		title: "",
		year: "",
		url: ""
	});
	const [result, setResult] = useState("");

	const updateResult = (formData) => {
		let newResult = `@misc{${formData.index},\n`;
		newResult += `  author="${formData.author}",\n`;
		newResult += `  title="${formData.title}",\n`;
		newResult += `  year="${formData.year}",\n`;
		newResult += `  howpublished={\\url{${formData.url}}},\n}`;
		setResult(newResult);
	}

	const copyResult = () => {
		navigator.clipboard.writeText(result);
	}

	const handleUpdate = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		const newFormData = {
			...formData,
			[name]: value
		}
		setFormData(newFormData);
		updateResult(newFormData);
	}

	const clearForm = () => {
		let newFormData = ({
			index: "",
			author: "",
			title: "",
			year: "",
			url: ""
		});
		setFormData(formData => newFormData);
		updateResult(newFormData);
	}

	return (
		<div className="app-root">
			<header>
				<h1>BibTeX @misc translator</h1>
			</header>
			<section>
				<span className="input-row">
					<label for="index">@misc index:</label>
					<input name="index"
						id="index"
						value={formData.index}
						onChange={handleUpdate}
					/><br/>
				</span>
				<span className="input-row">
					<label for="author">Author:</label>
					<input name="author"
						id="author"
						value={formData.author}
						onChange={handleUpdate}
					/><br/>
				</span>
				<span className="input-row">
					<label for="title">Title:</label>
					<input name="title"
						id="title"
						value={formData.title}
						onChange={handleUpdate}
					/><br/>
				</span>
				<span className="input-row">
					<label for="year">Year:</label>
					<input name="year"
						id="year"
						value={formData.year}
						onChange={handleUpdate}
					/><br/>
				</span>
				<span className="input-row">
					<label for="url">URL:</label>
					<input name="url"
						id="url"
						value={formData.url}
						onChange={handleUpdate}
					/><br/>
				</span>
				<textarea rows="10"
					wrap="soft"
					value={result}
					disabled
				/><br/>
				<div className="button-row">
					<button onClick={copyResult}>Copy</button>
					<button onClick={clearForm}>Clear</button>
				</div>
			</section>
		</div>
	);
}

export default App;
