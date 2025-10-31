const users = new Map();

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { username, item, chance } = JSON.parse(event.body);
        
        const user = users.get(username);
        if (!user) {
            return {
                statusCode: 404,
                body: JSON.stringify({ success: false, error: 'User not found' })
            };
        }

        // Calculate success
        const random = Math.random() * 100;
        const success = random <= chance;

        if (success) {
            // Upgrade successful - calculate new value
            const multipliers = {10: 8, 25: 3, 50: 1.8, 70: 1.3};
            const newValue = Math.round(item.value * multipliers[chance]);
            
            return {
                statusCode: 200,
                body: JSON.stringify({ 
                    success: true, 
                    result: 'win',
                    newValue: newValue,
                    message: `🎉 Upgrade successful! Item value: ${newValue}`
                })
            };
        } else {
            // Upgrade failed
            return {
                statusCode: 200,
                body: JSON.stringify({ 
                    success: true, 
                    result: 'lose',
                    message: '❌ Upgrade failed! Item lost.'
                })
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: 'Server error' })
        };
    }
};
