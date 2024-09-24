function addAmountToBalance(amount) {
    const currentBalance = parseFloat(localStorage.getItem('bankBalance')) || 0;
    const newBalance = currentBalance + amount;
    localStorage.setItem('bankBalance', newBalance);
    
    // Update the balance display
    
}
