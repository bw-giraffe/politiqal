$(document).ready(function(){
	console.log("THIS DoQUMENT IZ WERQING");


 	var states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

	var results = [];
	var wins = ["R","R","R","R","R","D","R","D","R","R","R","R","D","D","R","R","R","D","D","D","D","D","R","R","D","D","R","R","D","R","R","R","D","D","R","R","D","D"];

	states.forEach(function(ele, ind) {
		var data = { 'name': ele };
		results.push(data);
	});

	var stateResults = [
		["","R","R","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","SR","D","D","I","R","AI","R","D","R","R","R","R","R","R","R","R","R"],
	  ["","","","","","","","","","","","","","","","","","","","","","","","","R","D","R","R","R","R","R","R","R","R","R","R","R","R"],
	  ["","","","","","","","","","","","","D","D","R","R","R","D","D","D","D","D","R","R","R","R","R","R","R","R","R","R","R","D","R","R","R","R"],
	  ["","R","R","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","AI","R","D","R","R","R","D","D","R","R","R","R"],
	  ["R","R","R","R","D","R","R","D","R","R","R","R","PR","D","R","R","R","D","D","D","D","D","R","R","R","D","R","R","R","R","R","R","D","D","D","D","D","D"],
	  ["","","","R","R","R","R","PO","D","D","R","D","D","D","R","R","R","D","D","R","R","D","R","R","R","D","R","R","R","R","R","R","D","R","R","R","D","D"],
	  ["R","R","R","D","R","D","D","D","R","R","R","R","D","R","R","R","R","R","D","D","D","R","R","R","D","D","D","R","R","R","R","R","D","D","D","D","D","D"],
	  ["D","D","R","D","D","D","D","D","R","R","R","R","D","R","R","R","R","R","D","D","D","R","R","R","D","D","R","R","D","R","R","R","D","D","D","D","D","D"],
	  ["","","","","","","","","","","","","","","","","","","","","","","","","","D","D","D","D","D","D","D","D","D","D","D","D","D"],
	  ["","R","R","R","D","D","D","D","D","D","D","D","D","D","D","D","R","D","D","D","D","D","R","R","R","D","R","R","D","R","R","R","R","D","R","R","D","D"],
	  ["","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","R","AI","R","D","D","R","R","D","R","R","R","R","R"],
	  ["","","","","","","","","","","","","","","","","","","","","","","","","D","D","D","R","D","D","R","D","D","D","D","D","D","D"],
	  ["","","","","","","","PO","D","D","R","R","D","D","R","R","R","D","D","D","D","D","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R"],
	  ["R","R","R","R","R","R","R","D","R","R","R","R","D","R","R","R","R","D","D","D","D","D","R","R","D","D","R","R","R","R","R","R","D","D","D","D","D","D"],
	  ["R","R","R","D","R","D","R","D","R","R","R","R","D","R","R","R","R","D","D","R","R","R","R","R","R","D","R","R","R","R","R","R","R","R","R","R","D","R"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","D","R","R","R","R","D","D","R","R","D","R","R","R","D","R","R","R","R","R","D","D","D","D","R","D","D"],
	  ["R","R","R","R","R","R","R","PO","D","R","R","R","D","D","R","R","R","D","D","R","R","R","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R"],
	  ["D","D","D","D","D","D","D","D","R","D","D","D","D","D","D","R","R","D","D","D","D","D","D","R","R","D","R","R","D","R","R","R","D","D","R","R","R","R"],
	  ["","D","R","R","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","SR","D","R","D","R","AI","R","D","R","R","R","D","D","R","R","R","R"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R","D","D","R","R","R","R","R","D","D","D","D","D","D"],
	  ["R","D","D","D","D","D","D","D","R","R","D","D","D","D","R","R","R","D","D","D","D","R","R","R","D","D","D","R","D","D","R","R","D","D","D","D","D","D"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","D","R","R","R","D","D","D","D","D","D","R","R","D","D","D","D","D","R","R","D","D","D","D","D","D","D"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","PR","R","R","R","R","D","D","R","D","R","R","R","D","D","D","R","R","R","R","R","D","D","D","D","D","D"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","PR","R","R","R","R","D","D","D","D","D","R","R","D","D","D","R","D","D","D","D","D","D","D","D","D","D"],
	  ["","","R","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","SR","D","D","I","R","AI","R","D","R","R","R","R","R","R","R","R","R"],
	  ["R","R","D","D","D","D","D","D","D","D","R","R","D","D","R","R","R","D","D","D","D","D","R","D","D","D","R","R","D","R","R","R","D","D","R","R","R","R"],
	  ["","","","","","","","R","D","D","R","R","D","D","R","R","R","D","D","D","D","D","R","R","R","D","R","R","R","R","R","R","D","R","R","R","R","R"],
	  ["","R","R","R","R","R","R","R","D","R","R","D","D","D","R","R","R","D","D","R","R","R","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R"],
	  ["R","R","R","R","D","R","R","PO","D","D","R","D","D","D","R","R","R","D","D","D","D","D","R","R","D","D","R","R","R","R","R","R","D","D","R","R","D","D"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","D","D","R","R","R","R","D","D","D","R","R","R","R","D","R","R","R","R","R","R","D","D","R","D","D","D"],
	  ["D","D","R","D","D","D","D","D","R","R","R","R","D","R","R","R","R","D","D","D","D","R","R","R","D","D","R","R","R","R","R","R","D","D","D","D","D","D"],
	  ["","","","","","","","","","","","","D","D","R","R","R","D","D","D","D","D","R","R","D","D","R","R","R","R","R","R","D","D","D","R","D","D"],
	  ["R","D","R","D","R","D","R","D","R","R","R","R","D","R","R","R","R","D","D","D","D","R","R","R","D","D","D","R","D","R","R","D","D","D","D","D","D","D"],
	  ["","R","R","D","D","D","D","D","D","D","D","D","D","D","D","D","R","D","D","D","D","D","D","D","D","D","R","R","D","R","R","R","R","R","R","R","D","R"],
	  ["","","","","","","","SP","R","R","R","R","D","D","R","R","R","D","D","R","R","R","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","D","D","R","R","R","D","D","D","R","D","R","R","R","D","R","R","D","R","R","R","D","D","R","R","D","D"],
	  ["","","","","","","","","","","","D","D","D","R","D","R","D","D","D","D","D","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R"],
	  ["R","D","R","R","R","R","R","R","R","R","R","R","D","R","R","R","R","D","D","D","D","R","R","R","R","D","R","R","R","R","R","D","D","D","D","D","D","D"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","PR","R","R","R","R","R","D","D","D","R","R","R","D","D","D","R","D","R","R","R","D","D","D","D","D","D"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","D","R","R","R","D","D","D","D","D","D","R","R","D","D","D","R","D","D","R","D","D","D","D","D","D","D"],
	  ["","R","R","R","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","SR","D","D","D","R","R","R","D","R","R","R","R","R","R","R","R","R"],
	  ["","","","","","","","R","D","R","R","R","PR","R","R","R","R","D","D","R","R","R","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R"],
	  ["","R","D","D","D","D","D","D","D","D","D","D","D","D","R","D","R","D","D","D","D","D","R","R","R","D","R","R","D","R","R","R","D","D","R","R","R","R"],
	  ["","","D","D","D","D","D","D","D","D","D","D","D","D","D","D","R","D","D","D","D","D","R","R","D","D","D","R","D","R","R","R","R","R","R","R","R","R"],
	  ["","","","","","","","","D","R","R","R","R","D","R","R","R","D","D","D","D","D","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R"],
	  ["R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","D","R","R","R","R","R","R","D","D","D","D","D","D"],
	  ["","","R","D","D","D","D","D","D","D","D","D","D","D","D","D","R","D","D","D","D","D","R","R","R","D","R","R","R","R","R","R","R","R","R","R","D","D"],
	  ["","","","","","","","R","D","R","R","R","PR","D","R","R","R","D","D","D","D","D","R","R","R","D","D","R","R","R","R","D","D","D","D","D","D","D"],
	  ["R","R","R","D","D","D","D","D","R","R","R","R","D","R","R","R","R","D","D","D","D","D","D","R","D","D","D","R","D","D","R","D","D","D","R","R","R","R"],
	  ["R","R","R","R","R","R","R","D","R","R","R","R","D","R","R","PR","R","D","D","D","R","D","R","R","R","D","R","R","D","R","R","D","D","D","D","D","D","D"],
	  ["","","","","","","","R","D","R","R","R","D","D","R","R","R","D","D","D","R","D","R","R","R","D","R","R","R","R","R","R","R","R","R","R","R","R"]
	];

	stateResults.forEach(function(state, i) {
		var electionCount = 0;
		var correct = 0;
		wins.forEach(function(result, j) {
			vote = state[j];
			if (vote !== "") {
				electionCount ++;
				if (vote === result) {
					correct ++;
				}
			}
		});
		results[i].electionCount = electionCount;
		results[i].correctCount = correct;
		results[i].accuracy = correct / electionCount;
	});

	var election = new Datamap({
	  scope: 'usa',
	  element: document.getElementById('map_election'),
	  geographyConfig: {
	    highlightBorderColor: '#bada55',
	   popupTemplate: function(geography, data) {
	        return '<div class="hoverinfo">' + geography.properties.name + 
		'Electoral Votes:' +  data.electoralVotes + ' '
	    },
	    highlightBorderWidth: 3
	  },

	  fills: {
	  'Republican': '#CC4731',
	  'Democrat': '#306596',
	  'Heavy Democrat': '#667FAF',
	  'Light Democrat': '#A9C0DE',
	  'Heavy Republican': '#CA5E5B',
	  'Light Republican': '#EAA9A8',
	  defaultFill: '#EDDC4E'
	},
	data:{
	  "AZ": {
	      "fillKey": "Republican",
	      "electoralVotes": 5
	  },
	  "CO": {
	      "fillKey": "Light Democrat",
	      "electoralVotes": 5
	  },
	  "DE": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "FL": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 29
	  },
	  "GA": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "HI": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "ID": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "IL": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "IN": {
	      "fillKey": "Republican",
	      "electoralVotes": 11
	  },
	  "IA": {
	      "fillKey": "Light Democrat",
	      "electoralVotes": 11
	  },
	  "KS": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "KY": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "LA": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "MD": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "ME": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "MA": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "MN": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "MI": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "MS": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "MO": {
	      "fillKey": "Republican",
	      "electoralVotes": 13
	  },
	  "MT": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "NC": {
	      "fillKey": "Light Republican",
	      "electoralVotes": 32
	  },
	  "NE": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "NV": {
	      "fillKey": "Heavy Democrat",
	      "electoralVotes": 32
	  },
	  "NH": {
	      "fillKey": "Light Democrat",
	      "electoralVotes": 32
	  },
	  "NJ": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "NY": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "ND": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "NM": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "OH": {
	      "fillKey": "UNDECIDED",
	      "electoralVotes": 32
	  },
	  "OK": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "OR": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "PA": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "RI": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "SC": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "SD": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "TN": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "TX": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "UT": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "WI": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "VA": {
	      "fillKey": "Light Democrat",
	      "electoralVotes": 32
	  },
	  "VT": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "WA": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "WV": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "WY": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "CA": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "CT": {
	      "fillKey": "Democrat",
	      "electoralVotes": 32
	  },
	  "AK": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "AR": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  },
	  "AL": {
	      "fillKey": "Republican",
	      "electoralVotes": 32
	  }
	}
	});
	election.labels();
});



