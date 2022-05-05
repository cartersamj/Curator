# solo-project
art review app

https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&departmentId=

department ids: 
5: africa, ocea, americ,
6: Asian Art, 
9: Drawings/prints, 
11: european paintings,
14: islamic art, 
15: Robert Lehman Cellection
17: medieval art
21: modern art
queries: &q=*

https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]

https://images.metmuseum.org/CRDImages/ep/original/DP145935.jpg

https://images.metmuseum.org/CRDImages/ep/original/DP-19037-001.jpg

https://images.metmuseum.org/CRDImages/ep/original/DP252576.jpg

TODO:

1. Unsave, unfav features.  Both on front end and back end.
2. user saved/rated page (react router dom, Links)
--put saved feed on new page
3. comment feature
4. display comment feature
5. reorganize react structure
-- utlize state properly and in a less ugly
6. user feature. with login/validation
7. modify api call
-- allow for different genres
-- clean incoming data from api (object don't need to be that big)
8. caching