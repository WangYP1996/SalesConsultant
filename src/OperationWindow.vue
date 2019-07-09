<template>
    <div class="tab-pane fade in active" id="operation_window">
        <totalview></totalview>
        <traderank></traderank>
    </div>
</template>

<script>
import totalview from './components/OperationWindow/TotalView'
import traderank from './components/OperationWindow/TradeRank'

export default {
    name: 'OperationWindow',
    components: {
        totalview,
        traderank
    }    
}
</script>

<style>

</style>
