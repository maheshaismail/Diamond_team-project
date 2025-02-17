<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loan Calculator</title>
    <link rel="stylesheet" href="test.css">
</head>
<body>
    <div class="calculator-container">
        <h2>Loan Calculator</h2>
        <div class="form-result-container">
            <div class="form-container" id="form-container">
                <form>
                    <label for="principal">Principal</label>
                    <input type="number" id="principal" name="principal" required>

                    <label for="rate">Rate (%)</label>
                    <input type="number" id="rate" name="rate" required>

                    <label for="time">Time</label>
                    <input type="number" id="time" name="time" required>

                    <button type="button" onclick="calculateLoan()">CALCULATE</button>
                </form>
            </div>
            <div class="result-container" id="result-container">
                <h3>The interest is :</h3>
                <div id="result"></div>
            </div>
        </div>
    </div>
</body>
    
</html>