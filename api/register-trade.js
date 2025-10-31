const users = new Map();

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { username, items, total_value } = JSON.parse(event.body);
        
        if (!username || !items) {
            return {
                statusCode: 400,
                body: JSON.stringify({ success: false, error: 'Username and items required' })
            };
        }

        const user = users.get(username);
        if (!user) {
            return {
                statusCode: 404,
                body: JSON.stringify({ success: false, error: 'User not found' })
            };
        }

        // Add items to user inventory
        user.inventory.push(...items);
        user.balance += total_value;

        return {
            statusCode: 200,
            body: JSON.stringify({ 
                success: true, 
                newBalance: user.balance,
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
