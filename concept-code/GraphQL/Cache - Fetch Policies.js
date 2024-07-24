/**
 * Fetch Policies:
 * cache-first (default): 
Tries to read data from the cache first, falling back to a network 
request if the data is not in the cache.
cache-only: 
Only reads from the cache and never makes a network request.
network-only: 
Always makes a network request, ignoring the cache.
no-cache: 
Does not cache the result and always makes a network request.
cache-and-network: 
Returns cached data while also making a network request to update the cache.

 */
const { loading, error, data } = useQuery(GET_TODOS, {
  fetchPolicy: "cache-and-network",
});
