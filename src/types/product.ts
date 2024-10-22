export interface IProduct {
	title: string;
	subtitle: string;
	url: string;
	image: string;
	price: number;
	created_at: string;
	is_auction: boolean;
	end_date?: string;
}
