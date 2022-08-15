
export default {
	async fetch(request, env, context) {		
		const Followers = `
			query Followers {
			  currentUser {
			    followers(count: 1) {
			      items {
			        username
			      }
			    }
			  }
			}`;
		
		const UpdateBio = `
			mutation UpdateBio($UpdateCurrentUserInput: UpdateCurrentUserInput!) {
			  updateCurrentUser(input: $UpdateCurrentUserInput) {
			    bio
			  }
			}`
		
		const headers = {
			'User-Agent': 'Mozilla/5.0',
			'Content-Type': 'application/json',
			'X-Requested-With': 'XMLHttpRequest',
			Referrer: 'https://replit.com/',
			Cookie: env.REPLIT_TOKEN ? `connect.sid=${encodeURIComponent(env.REPLIT_TOKEN)};` : '',
		};
		
		const { data: { currentUser } } = await fetch('https://replit.com/graphql', {
			method: 'POST',
			headers,
			body: JSON.stringify({
				query: Followers,
				variables: JSON.stringify({}),
			})
		}).then((res) => res.json());

		const recentFollower = currentUser.followers.items[0].username;
		const bio = `[ Most Recent Follower: @${recentFollower} ✨ ] Community Moderator @ Replit. Teen Fullstack Dev && Software Engineer.`;

		const data = await fetch('https://replit.com/graphql', {
			method: 'POST',
			headers,
			body: JSON.stringify({
				query: UpdateBio,
				variables: JSON.stringify({
					UpdateCurrentUserInput: { bio }
				}),
			})
		}).then((res) => res.json());
		
		return new Response(`Thank you @${recentFollower} for following me!`);
	},
	async scheduled(request, env, context) {
		const Followers = `
			query Followers {
			  currentUser {
			    followers(count: 1) {
			      items {
			        username
			      }
			    }
			  }
			}`;
		
		const UpdateBio = `
			mutation UpdateBio($UpdateCurrentUserInput: UpdateCurrentUserInput!) {
			  updateCurrentUser(input: $UpdateCurrentUserInput) {
			    bio
			  }
			}`
		
		const headers = {
			'User-Agent': 'Mozilla/5.0',
			'Content-Type': 'application/json',
			'X-Requested-With': 'XMLHttpRequest',
			Referrer: 'https://replit.com/',
			Cookie: env.REPLIT_TOKEN ? `connect.sid=${encodeURIComponent(env.REPLIT_TOKEN)};` : '',
		};
		
		const { data: { currentUser } } = await fetch('https://replit.com/graphql', {
			method: 'POST',
			headers,
			body: JSON.stringify({
				query: Followers,
				variables: JSON.stringify({}),
			})
		}).then((res) => res.json());

		const recentFollower = currentUser.followers.items[0].username;
		const bio = `[ Most Recent Follower: @${recentFollower} ✨ ] Community Moderator @ Replit. Teen Fullstack Dev && Software Engineer.`;

		const data = await fetch('https://replit.com/graphql', {
			method: 'POST',
			headers,
			body: JSON.stringify({
				query: UpdateBio,
				variables: JSON.stringify({
					UpdateCurrentUserInput: { bio }
				}),
			})
		}).then((res) => res.json());
		
		return;
	},
};
