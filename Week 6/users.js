<!DOCTYPE html>
<html>
<head>
	<title></title>

	<style type="text/css">

		@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500i,700&display=swap');

		body {
			font-family: 'Roboto', sans-serif;
		}

		#friendList {
			border:solid;
			border-width: 1px;
			padding: 10px;
			border-radius: 10px;
			display: flex;
			flex-direction: row;
		}

		.friendItem {
			display: flex;
			flex-direction: column;
			/*align-items: center;*/
			justify-content: center;
			margin-right: 10px;
		}

		.friendItem .name {
			display: flex;
			justify-content: center;
			font-size: .8em;
			margin: 0;
		}


		.friendItem .avatar {
			height: 70px;
			width: 70px;
			border-radius: 35px;
			overflow: hidden;
		}

	</style>

</head>
<body>


	<div id="friendList">
		<div class="friendItem">
			<div class="avatar">
				<img src="http://placeimg.com/70/70/people?u=1">
			</div>
			<div class="name">Jane Doe</div>
			<ul>
				<li>Running</li>
				<li>Snowboarding</li>
			</ul>
		</div>
		<div class="friendItem">
			<div class="avatar">
				<img src="http://placeimg.com/70/70/people?u=2">
			</div>
			<div class="name">Jane Doe</div>
			<ul>
				<li>Hiking</li>
				<li>Art</li>
			</ul>
		</div>
	</div>

	<script type="text/javascript">
		
		let friendArray = [
			{
				name:"John", 
				avatarPath: "http://placeimg.com/170/30/people?u=3",
				hobbies: ["running", "art"]
			},
			{
				name:"Jackie", 
				avatarPath: "http://placeimg.com/70/70/people?u=4",
				hobbies: ["hiking", "coding"]
			}

		];

		//CREATE Code Here
		for( var i=0; i<friendArray.length; i++){
			console.log("bhihibhibhibhi"+friendArray[i])
		}

	</script>.

</body>
</html>