import {
  changeCompetitorStatus,
  updateCompetitor,
} from '../../modules/event/eventService.js';
import { verifyToken } from '../../utils/jwtToken.js';

export const competitorStatusChange = async (_, { input }, context) => {
  if (!context.token) {
    throw new Error('Unauthorized: No token provided');
  }
  const jwtDecoded = verifyToken(context.token);
  if (!jwtDecoded) {
    throw new Error('Unauthorized: Invalid or expired token');
  }
  // Implement signin logic here
  const { eventId, competitorId, origin, status } = input;
  const { userId } = jwtDecoded;

  try {
    const statusChangeMessage = await changeCompetitorStatus(
      eventId,
      competitorId,
      origin,
      status,
      userId,
    );
    return {
      message: statusChangeMessage,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const competitorUpdate = async (_, { input }, context) => {
  if (!context.token) {
    throw new Error('Unauthorized: No token provided');
  }
  const jwtDecoded = verifyToken(context.token);
  if (!jwtDecoded) {
    throw new Error('Unauthorized: Invalid or expired token');
  }
  // Implement signin logic here
  const { eventId, competitorId, origin, card, note } = input;
  const { userId } = jwtDecoded;

  try {
    const updateCompetitorMessage = await updateCompetitor(
      eventId,
      competitorId,
      origin,
      card,
      note,
      userId,
    );
    return {
      message: updateCompetitorMessage,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
