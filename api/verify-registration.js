const users = new Map();

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { username } = JSON.parse(event.body);
        
        if (!username) {
            return {
                statusCode: 400,
                body: JSON.stringify({ success: false, error: 'Username required' })
            };
        }

        // For demo - simulate successful verification
        // In real implementation, check Roblox API
        const userData = {
            id: Date.now().toString(),
            username: username,
            balance: 0,
            inventory: [],
            registeredAt: new Date().toISOString()
        };

        users.set(username, userData);

        return {
            statusCode: 200,
            body: JSON.stringify({ 
                success: true, 
                user: userData 
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: 'Server error' })
        };
    }
};
