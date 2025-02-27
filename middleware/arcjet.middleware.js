import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, { requested: 5});

        if(decision.isDenied()) {
            if (decision.reason.isRateLimit()) return res.status(429).json({ message: 'Too many Requests || Rate limit exceeded'});
            if (decision.reason.isBot()) return res.status(403).json({ message: 'No bots allowed || Bot detected',});
             
            return res.status(403).json({ message: 'Forbidden || Access denied',});
        }

        next();
            
    } catch (error) {
        console.log(`Arcject Middleware Error: ${error}`);
        next(error);
    }
}

export default arcjetMiddleware;