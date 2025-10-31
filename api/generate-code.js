const crypto = require('crypto');

const activeCodes = new Map();
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

        // Generate 30-character random code
        const code = crypto.randomBytes(15).toString('hex').toUpperCase();
        const expiresAt = Date.now() + 10 * 60 * 1000;

        activeCodes.set(username, {
            code,
            expiresAt,
            createdAt: Date.now()
        });

        setTimeout(() => {
            if (activeCodes.get(username)?.code === code) {
                activeCodes.delete(username);
            }
        }, 10 * 60 * 1000);

        return {
            statusCode: 200,
            body: JSON.stringify({ 
                success: true, 
                code,
                expiresIn: 600 
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: 'Server error' })
        };
    }
};
