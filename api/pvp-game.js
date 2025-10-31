const users = new Map();

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { player1, player2, items1, items2 } = JSON.parse(event.body);
        
        // Simulate PvP game
        const random = Math.random();
        const winner = random > 0.5 ? player1 : player2;
        const loser = winner === player1 ? player2 : player1;
        
        const winnerUser = users.get(winner);
        const loserUser = users.get(loser);

        if (!winnerUser || !loserUser) {
            return {
                statusCode: 404,
                body: JSON.stringify({ success: false, error: 'User not found' })
            };
        }

        // Calculate commission (10%)
        const totalValue = items1.reduce((sum, item) => sum + item.value, 0) + 
                          items2.reduce((sum, item) => sum + item.value, 0);
        const commission = totalValue * 0.1;

        // Transfer items (simplified)
        winnerUser.balance += totalValue - commission;
        loserUser.balance -= totalValue;

        return {
            statusCode: 200,
            body: JSON.stringify({ 
                success: true, 
                winner: winner,
                winAmount: totalValue - commission,
                commission: commission
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: 'Server error' })
        };
    }
};
