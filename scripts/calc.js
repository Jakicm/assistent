let currentInput = '';
    let history = '';

    function appendToDisplay(value) {
      currentInput += value;
      document.getElementById('display').value = currentInput;
    }

    function clearDisplay() {
      currentInput = '';
      document.getElementById('display').value = '';
    }

    function calculate() {
      try {
        const result = eval(currentInput);
        history += `${currentInput} = ${result}\n`;
        document.getElementById('history').innerText = history;
        clearDisplay();
      } catch (error) {
        clearDisplay();
        document.getElementById('history').innerText = 'Error';
      }
    }

    function clearHistory() {
        history = '';
        document.getElementById('history').innerText = '';
      }

    // Keyboard support
    document.addEventListener('keydown', (event) => {
      const key = event.key;
      if (/[\d.+\-*/]/.test(key)) {
        event.preventDefault();
        appendToDisplay(key);
      } else if (key === 'Enter') {
        event.preventDefault();
        calculate();
      } else if (key === 'Escape') {
        clearDisplay();
      }
    });