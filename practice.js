function fetchNumbers() {
    const numberId = document.getElementById('numberId').value.trim().toLowerCase();
  
    // Make sure numberId is one of 'p', 'f', 'e', 'r'
    if (!['p', 'f', 'e', 'r'].includes(numberId)) {
      alert('Invalid number ID. Please enter one of: p, f, e, r');
      return;
    }
  
    // Send GET request to your API endpoint
    fetch(`/numbers/${numberId}`)
      .then(response => response.json())
      .then(data => {
        displayResult(data);
      })
      .catch(error => {
        console.error('Error fetching numbers:', error);
        alert('Failed to fetch numbers. Please try again later.');
      });
  }
  
  function displayResult(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p><strong>Numbers before:</strong> ${data.before.join(', ')}</p>
      <p><strong>Numbers after:</strong> ${data.after.join(', ')}</p>
      <p><strong>Average:</strong> ${data.average !== undefined ? data.average.toFixed(2) : '-'}</p>
    `;
  }
  
