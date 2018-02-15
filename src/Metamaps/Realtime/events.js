/* EVENTS SENDABLE */
module.exports = {
  JOIN_MAP: 'JOIN_MAP',
  CHECK_FOR_CALL: 'CHECK_FOR_CALL',
  LEAVE_MAP: 'LEAVE_MAP',
  ACCEPT_CALL: 'ACCEPT_CALL',
  DENY_CALL: 'DENY_CALL',
  DENY_INVITE: 'DENY_INVITE',
  INVITE_TO_JOIN: 'INVITE_TO_JOIN',
  INVITE_A_CALL: 'INVITE_A_CALL',
  JOIN_CALL: 'JOIN_CALL',
  LEAVE_CALL: 'LEAVE_CALL',
  SEND_MAPPER_INFO: 'SEND_MAPPER_INFO',
  SEND_COORDS: 'SEND_COORDS',
  DRAG_TOPIC: 'DRAG_TOPIC',

  /* EVENTS RECEIVABLE FROM NODE SERVER */
  JUNTO_UPDATED: 'JUNTO_UPDATED',
  INVITED_TO_CALL: 'INVITED_TO_CALL',
  INVITED_TO_JOIN: 'INVITED_TO_JOIN',
  CALL_ACCEPTED: 'CALL_ACCEPTED',
  CALL_DENIED: 'CALL_DENIED',
  INVITE_DENIED: 'INVITE_DENIED',
  CALL_IN_PROGRESS: 'CALL_IN_PROGRESS',
  CALL_STARTED: 'CALL_STARTED',
  MAPPER_JOINED_CALL: 'MAPPER_JOINED_CALL',
  MAPPER_LEFT_CALL: 'MAPPER_LEFT_CALL',
  MAPPER_LIST_UPDATED: 'MAPPER_LIST_UPDATED',
  NEW_MAPPER: 'NEW_MAPPER',
  LOST_MAPPER: 'LOST_MAPPER',
  TOPIC_DRAGGED: 'TOPIC_DRAGGED',
  PEER_COORDS_UPDATED: 'PEER_COORDS_UPDATED'
}