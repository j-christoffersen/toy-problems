/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const ticketObj = {};
  tickets.forEach((ticket) => {
    ticketObj[ticket[0]] = ticketObj[ticket[0]] || [];
    ticketObj[ticket[0]].push({destination: ticket[1], selected: false});
  });

  for (let bucketIndex in ticketObj) {
    ticketObj[bucketIndex].sort((a, b) => {
      if (a.destination < b.destination) return -1;
      if (a.destination > b.destination) return 1;
      return 0;
    });
  }
    
  // console.log(ticketObj);

  const itinerary = ['JFK'];

  const recurse = (currentLocation) => {
    // console.log(currentLocation);
    const bucket = ticketObj[currentLocation];
    
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (!bucket[i].visited) {
          bucket[i].visited = true;
          itinerary.push(bucket[i].destination);
          var solutionFound = recurse(bucket[i].destination);

          if (solutionFound) {
            return true;
          }

          itinerary.pop();
          bucket[i].visited = false;
        }
      }    
    }
       
    // console.log(itinerary);
    return itinerary.length === tickets.length + 1;  
  };

  recurse('JFK');

  return itinerary;
};
