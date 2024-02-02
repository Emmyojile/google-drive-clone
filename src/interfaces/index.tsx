export interface ButtonProps {
    btnClass: string;
    title: string;
    onClick: ()=>void;
}

export interface GithubAuth {
    clientId: string;
    clientSecret: string;
}