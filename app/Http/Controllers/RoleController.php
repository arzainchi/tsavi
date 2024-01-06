<?php

namespace App\Http\Controllers;

use App\Http\Requests\Roles\RoleRequest;
use App\Http\Services\RoleService;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    private $roleService;

    public function __construct()
    {
        $this->roleService = new RoleService();
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = [
            'name' => $request->input('name'),
        ];
        $page = $request->input('page', 1);
        $per_page = $request->input('per_page', 10);

        $data = $this->roleService->getAllPaginate(
            filter: $filter,
            page: $page,
            per_page: $per_page,
        );

        return response()->json([
            'status' => 'success',
            'data' => $data,
            'message' => 'get data successful',
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RoleRequest $request)
    {
        if (isset($request->validator) && $request->validator->fails()) {
            return response()->json([
                'status' => 'failed',
                'errors' => $request->validator->errors(),
                'message' => 'failed'
            ], 422);
        }

        $payload = $request->only('name', 'access');
        $data = $this->roleService->store($payload);
        if (!$data['status']) {
            return response()->json([
                'status' => 'failed',
                'errors' => $data['errors'],
                'message' => 'failed'
            ], 422);
        }

        return response()->json([
            'status' => 'success',
            'data' => '',
            'message' => 'create data successful'
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = $this->roleService->getById($id);
        if (!$data['status']) {
            return response()->json([
                'status' => 'failed',
                'errors' => $data['errors'],
                'message' => 'not found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $data['data'],
            'message' => 'get data successful'
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RoleRequest $request, string $id)
    {
        if (isset($request->validator) && $request->validator->fails()) {
            return response()->json([
                'status' => 'failed',
                'errors' => $request->validator->errors(),
                'message' => 'failed'
            ], 422);
        }

        $payload = $request->only('name', 'access');
        $data = $this->roleService->update($payload, $id);
        if (!$data['status']) {
            return response()->json([
                'status' => 'failed',
                'errors' => $data['errors'],
                'message' => 'failed'
            ], 422);
        }

        return response()->json([
            'status' => 'success',
            'data' => '',
            'message' => 'create data successful'
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = $this->roleService->delete($id);
        if (!$data['status']) {
            return response()->json([
                'status' => 'failed',
                'errors' => $data['errors'],
                'message' => 'failed'
            ], 422);
        }

        return response()->json([
            'status' => 'success',
            'data' => '',
            'message' => 'create data successful'
        ], 201);
    }
}
