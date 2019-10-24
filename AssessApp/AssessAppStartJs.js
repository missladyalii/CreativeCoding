/*

<div>
	<label> <input id="topic1" value="html" name="topics" type="checkbox" name=">"
	<div class="metadata"> Questions Mastered: 32/100</div>
	<progress value="32" max="100">
</div>
<hr>
*/

for(let titleItem in topics){
	console.log (item);
	console.log (topics[item]);
	const topicList= document.querySelector('#topicList');
	topicList.innerHTML= "Hello";

//create item
	const item= document.createElement("div");
	item.innerHTML= "Hello There";
	topicList.appendChild(item);


//create rule
	const rule= document.createElement("hr");
	topicList.appendChild(rule);

//create label
	const label= document.createElement("label");
	item.appendChild(label);

//create checkbox
	const checkbox= document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkbox.setAttribute("name", "topics");
	label.appendChild(checkbox);

//create label text
	const labelText= document.createTextNode(titleItem);
	label.appendChild(labelText);

//create subdiv metadata
	const metaDiv= document.createElement("div");
	metaDiv.classList.add("metadata");
	metaDiv.innerHTML='Questions Mastered: ${titleItem.totalMastered}/100';
	item.appendChild(metaDiv);

//create progressbar
	const progressbar= document.createElement("progress");
	progressbar. setAttribute("value", "32");
	progressbar.setAttribute("max", "100"); 
	item.appendChild(progressbar);
}

