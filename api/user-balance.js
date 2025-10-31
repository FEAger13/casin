const users = new Map();

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'GET') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const username = event.queryStringParameters.username;
        
        if (!username) {
            return {
                statusCode: 400,
                body: JSON.stringify({ success: false, error: 'Username required' })
            };
        }

        const user = users.get(username);
        
        if (!user) {
            return {
                statusCode: 404,
                body: JSON.stringify({ success: false, error: 'User not found' })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ 
                success: true, 
                balance: user.balance,
                inventory: user.inventory 
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: 'Server error' })
        };
    }
};
