/** @module party */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Create a new party
 *
 * @param {module:types.CreatePartyRequest} userId User who creates the party
 * @return {Promise<module:types.Party>} OK
 */
export function createParty(userId) {
  const parameters = {
    body: {
      userId
    }
  }
  return gateway.request(createPartyOperation, parameters)
}

/**
 * Create a new party from telegram or return existing party
 *
 * @param {module:types.CreatePartyTelegramRequest} userId User who creates the party
 * @return {Promise<module:types.Party>} OK
 */
export function getOrCreatePartyTelegram(userId) {
  const parameters = {
    body: {
      userId
    }
  }
  return gateway.request(getOrCreatePartyTelegramOperation, parameters)
}

/**
 * get party from tg chat id
 *
 * @param {string} chatId The telegram chat id
 * @return {Promise<module:types.Party>} OK
 */
export function getTgParty(chatId) {
  const parameters = {
    path: {
      chatId
    }
  }
  return gateway.request(getTgPartyOperation, parameters)
}

/**
 * Get party information by id
 *
 * @param {string} partyId The patry id
 * @return {Promise<module:types.Party>} successful operation
 */
export function getParty(partyId) {
  const parameters = {
    path: {
      partyId
    }
  }
  return gateway.request(getPartyOperation, parameters)
}

/**
 * Add member to a party
 *
 * @param {string} partyId The patry id
 * @param {string} userId
 * @return {Promise<object>} successful operation
 */
export function addPartyMember(partyId, userId) {
  const parameters = {
    path: {
      partyId
    },
    body: {
      userId
    }
  }
  return gateway.request(addPartyMemberOperation, parameters)
}

/**
 * Get all members of a party
 *
 * @param {string} partyId The patry id
 * @return {Promise<module:types.ArrayOfMembers>} successful operation
 */
export function getPartyMembers(partyId) {
  const parameters = {
    path: {
      partyId
    }
  }
  return gateway.request(getPartyMembersOperation, parameters)
}

/**
 * Add member to a party
 *
 * @param {string} partyId The patry id
 * @param {string} memberId The member id
 * @return {Promise<object>} successful operation
 */
export function deletePartyMember(partyId, memberId) {
  const parameters = {
    path: {
      partyId,
      memberId
    }
  }
  return gateway.request(deletePartyMemberOperation, parameters)
}

/**
 * Add entry to a party
 *
 * @param {string} partyId The patry id
 * @param {module:types.AddPartyEntryRequest} addPartyEntryRequest add party enrty request
 * @return {Promise<string>} successful operation
 */
export function addPartyEntry(partyId, addPartyEntryRequest) {
  const parameters = {
    path: {
      partyId
    },
    body: {
      addPartyEntryRequest
    }
  }
  return gateway.request(addPartyEntryOperation, parameters)
}

/**
 * Get all entries of a party
 *
 * @param {string} partyId The patry id
 * @return {Promise<module:types.ArrayOfEntries>} successful operation
 */
export function getPartyEntries(partyId) {
  const parameters = {
    path: {
      partyId
    }
  }
  return gateway.request(getPartyEntriesOperation, parameters)
}

/**
 * Delete entry from a party
 *
 * @param {string} partyId The patry id
 * @param {string} entryId The entry id
 * @return {Promise<string>} successful operation
 */
export function deletePartyEntry(partyId, entryId) {
  const parameters = {
    path: {
      partyId,
      entryId
    }
  }
  return gateway.request(deletePartyEntryOperation, parameters)
}

/**
 * Calculate payments for party
 *
 * @param {string} partyId The patry id
 * @return {Promise<module:types.ArrayOfPayments>} successful operation
 */
export function calculateParty(partyId) {
  const parameters = {
    path: {
      partyId
    }
  }
  return gateway.request(calculatePartyOperation, parameters)
}

/**
 * Get all payments for party
 *
 * @param {string} partyId The patry id
 * @return {Promise<module:types.ArrayOfPayments>} successful operation
 */
export function getPartyPayments(partyId) {
  const parameters = {
    path: {
      partyId
    }
  }
  return gateway.request(getPartyPaymentsOperation, parameters)
}

/**
 * Get all parties that this user created
 *
 * @param {string} memberId The member id
 * @return {Promise<module:types.ArrayOfParties>} successful operation
 */
export function getPartyCreated(memberId) {
  const parameters = {
    path: {
      memberId
    }
  }
  return gateway.request(getPartyCreatedOperation, parameters)
}

/**
 * Get all parties that this user take part
 *
 * @param {string} memberId The member id
 * @return {Promise<module:types.ArrayOfParties>} successful operation
 */
export function getPartyParticipated(memberId) {
  const parameters = {
    path: {
      memberId
    }
  }
  return gateway.request(getPartyParticipatedOperation, parameters)
}

/**
 * Set payment as paid
 *
 * @param {string} paymentId The payment id
 * @return {Promise<object>} successful operation
 */
export function setPaymentPaid(paymentId) {
  const parameters = {
    path: {
      paymentId
    }
  }
  return gateway.request(setPaymentPaidOperation, parameters)
}

/**
 * Set payment as not paid
 *
 * @param {string} paymentId The payment id
 * @return {Promise<object>} successful operation
 */
export function setPaymentReject(paymentId) {
  const parameters = {
    path: {
      paymentId
    }
  }
  return gateway.request(setPaymentRejectOperation, parameters)
}

const createPartyOperation = {
  path: '/party',
  contentTypes: ['application/json'],
  method: 'post'
}

const getOrCreatePartyTelegramOperation = {
  path: '/party_tg',
  contentTypes: ['application/json'],
  method: 'post'
}

const getTgPartyOperation = {
  path: '/party_tg/{chatId}',
  method: 'get'
}

const getPartyOperation = {
  path: '/party/{partyId}',
  method: 'get'
}

const addPartyMemberOperation = {
  path: '/party/{partyId}/member',
  contentTypes: ['application/json'],
  method: 'put'
}

const getPartyMembersOperation = {
  path: '/party/{partyId}/member',
  method: 'get'
}

const deletePartyMemberOperation = {
  path: '/party/{partyId}/member/{memberId}',
  method: 'delete'
}

const addPartyEntryOperation = {
  path: '/party/{partyId}/entry',
  contentTypes: ['application/json'],
  method: 'post'
}

const getPartyEntriesOperation = {
  path: '/party/{partyId}/entry',
  method: 'get'
}

const deletePartyEntryOperation = {
  path: '/party/{partyId}/entry/{entryId}',
  method: 'delete'
}

const calculatePartyOperation = {
  path: '/party/{partyId}/calculate',
  method: 'get'
}

const getPartyPaymentsOperation = {
  path: '/party/{partyId}/payment',
  method: 'get'
}

const getPartyCreatedOperation = {
  path: '/member/{memberId}/created',
  method: 'get'
}

const getPartyParticipatedOperation = {
  path: '/member/{memberId}/participated',
  method: 'get'
}

const setPaymentPaidOperation = {
  path: '/payment/{paymentId}/paid',
  method: 'put'
}

const setPaymentRejectOperation = {
  path: '/payment/{paymentId}/reject',
  method: 'put'
}
