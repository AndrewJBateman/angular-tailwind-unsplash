/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IUnsplashResponse {
	body: {
		id: string;
		created_at: string;
		updated_at: string;
		promoted_at: string;
		width: number;
		height: number;
		color: string;
		blur_hash: string;
		breadcrumbs: [];
		description: string;
		alt_description: string;
		urls: {
			raw: string;
			full: string;
			regular: string;
			small: string;
			thumb: string;
		};
		links: {
			self: string;
			html: string;
			download: string;
			download_location: string;
		};
		location: ILocation;
		position: {
			latitude: null;
			longitude: null;
		};
		likes: number;
		liked_by_user: boolean;
		current_user_collections: [];
		sponsorship: null;
		user: IUser;
		exif: {
			make: string;
			model: string;
			exposure_time: string;
			aperture: string;
			focal_length: string;
			iso: number;
		};
		views: number;
		downloads: number;
	};
	headers: IUnsplashResponseHeaders;
	ok: boolean;
	status: number;
	statusText: string;
	type: number;
	url: string;
}

interface IUser {
	id: string;
	updated_at: string;
	username: string;
	name: string;
	first_name: string;
	last_name: string;
	twitter_username: string | null;
	portfolio_url: string;
	bio: string;
	location: null;
	links: IUnsplashLinks;

	profile_image: {
		small: string;
		medium: string;
		large: string;
	};
	instagram_username: string;
	total_collections: number;
	total_likes: number;
	total_photos: number;
	accepted_tos: boolean;
}

interface IUnsplashLinks {
	self: string;
	html: string;
	download: string;
	download_location: string;
}

interface ILocation {
	city: null;
	country: null;
	name: null;
}

interface IUnsplashResponseHeaders {
	// Define the properties of the headers object here
}
