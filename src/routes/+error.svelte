<script>
	import { page } from "$app/state";

	// Maybe have an anime girl hold a sign with the error code and message?
</script>

<div class="flex-auto flex flex-col justify-center items-center text-4xl gap-2">
	<!-- <img src="/image.png" alt="" srcset=""> -->

	<div>
		{page.status}
	</div>

	<div>
		{page.error?.message}
	</div>
</div>