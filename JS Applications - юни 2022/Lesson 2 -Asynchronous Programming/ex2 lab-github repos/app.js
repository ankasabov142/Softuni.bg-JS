function loadRepos() {
  //read input field
  const user = document.getElementById("username").value;
  const list = document.getElementById("repos");
  list.innerHTML = "";
  const url = `https://api.github.com/users/${user}/repos`;
  try {
    async function readData(url) {
      const res = await fetch(url);
      const data = await res.json();
	  if(res.ok!=true){
throw new Error();
	  }
      for (let repo of data) {
        let li = document.createElement("li");
        let repoName = repo.name;
        let repoUrl = repo.html_url;
        let a = document.createElement("a");
        let link = document.createTextNode(`${user}/${repoName}`);
        a.appendChild(link);
        a.title = `${user}/${repoName}`;
        a.href = repoUrl;
        li.appendChild(a);
        list.appendChild(li);
      }
    }
	readData(url);
  } catch {
    alert("404 “Not Found!”");
  }

  
  //display response data
}
