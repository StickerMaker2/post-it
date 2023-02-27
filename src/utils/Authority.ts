/**
 * @brief Check Authorization header and return the token as a substring
 * @param Authorization Authorization header
 * @param res Router response
 * @returns 
 */

export default function auth__(Authorization: any, res: any) {
  // @ts-ignore
  if (Authorization) {
    if (Authorization.startsWith("Bearer ")) {
      // @ts-ignore
      return Authorization.substring(7, Authorization.length);
    } else {
      return res.sendStatus(422);
    }
  } else {
    return res.sendStatus(422);
  }
}
