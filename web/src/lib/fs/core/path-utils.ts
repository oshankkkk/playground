export function pathSegments(path: string): string[] {
	return path.split("/").filter(Boolean);
}

export function basename(path: string): string {
	const parts = pathSegments(path);
	return parts[parts.length - 1] ?? "/";
}

export function dirname(path: string): string {
	const parts = pathSegments(path);
	return parts.slice(0, -1).join("/");
}

export function ext(path: string): string {
	return path.split(".").pop() ?? "";
}

export function join(...segments: string[]): string {
	const leading = segments[0].startsWith("/") ? "/" : "";
	return (
		leading +
		segments
			.flatMap((s) => s.split("/"))
			.filter(Boolean)
			.join("/")
	);
}

export function isRootPath(path: string): boolean {
	return !path || path === "." || path === "/";
}
