/** @module types */
// Auto-generated, edits will be overwritten

/**
 * @typedef CreatePartyRequest
 * @memberof module:types
 *
 * @property {string} userId Big int user creator id
 * @property {string} name Name of a party
 */

/**
 * @typedef CreatePartyTelegramRequest
 * @memberof module:types
 *
 * @property {string} userId Big int user creator id
 * @property {string} name Name of a party
 * @property {string} chatId Telegram chat id
 */

/**
 * @typedef AddPartyEntryRequest
 * @memberof module:types
 *
 * @property {string} userCreatorId The user creator id
 * @property {string} userWhoPaidId The user who paid id
 * @property {string} name The entry name
 * @property {string} cost The entry cost
 * @property {string} currency The entry currency
 * @property {string} split Array how to split enrty in format [("UserId", "percent");(...),..]. For example, (4,50);(5,200) By default - equally by all members
 */

/**
 * @typedef Party
 * @memberof module:types
 *
 * @property {string} partyId Big int party id
 * @property {string} userCreatorId Big int user creator id
 * @property {string} name Name of a party
 */

/**
 * @typedef Entry
 * @memberof module:types
 *
 * @property {string} entryId Big int enrty id
 * @property {string} partyId Big int party id
 * @property {string} userCreatorId Big int user creator id
 * @property {string} userWhoPaidId Big int user who paid for consumption id
 * @property {string} name Name of a consumption
 * @property {string} cost Cunsumption cost
 * @property {string} currency Cunsumption currency
 * @property {module:types.Split[]} split A map with key as a user id and value as a user's proportion
 */

/**
 * @typedef Member
 * @memberof module:types
 *
 * @property {string} userId Big int user id
 * @property {string} name User name
 */

/**
 * @typedef Split
 * @memberof module:types
 *
 * @property {string} userId Big int user id
 * @property {string} proportion User's proportion in percents
 */

/**
 * @typedef Payment
 * @memberof module:types
 *
 * @property {string} paymentId Big int payment id
 * @property {string} userSenderId Big int user sender id
 * @property {string} userReceiverId Big int user reciever id
 * @property {string} partyId Big int party id
 * @property {string} cost Payment cost
 * @property {string} currency Payment currency
 * @property {boolean} isPaid Is user sender sent the payment
 * @property {boolean} isConfirmed Is user receiver confirmed the payment
 */
