function calculateMinCost() {
  const input = document.getElementById("input").value;
  const lengths = input.split(",").map((length) => parseInt(length));
  const sortedLengths = lengths.sort((a, b) => a - b);
  let cost = 0;
  while (sortedLengths.length > 1) {
    const sum = sortedLengths[0] + sortedLengths[1];
    cost += sum;
    sortedLengths.splice(0, 2, sum);
    sortedLengths.sort((a, b) => a - b);
  }
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = cost;
}
